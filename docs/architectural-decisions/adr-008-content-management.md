# ADR 008: Content management

- **Date created**: 04/06/2024
- **Driver**: Alex Foxleigh (Foxy)

## Status

![accepted]

## Context

A content management system needs to be implemented within the application. We will be investigating
the following options:

- [Sanity](https://sanity.io/)
- [Contentstack](https://www.contentstack.com/)

Sanity is a headless CMS that is built on top of React. It is very easy to use and has a large
community. It is also very well supported and has a large number of plugins available.

It is developer led and has a very good developer experience. It is also very flexible and can be
used to build a wide range of applications.

Contentstack is a headless CMS that is almost entirely UI driven. It is very easy to use and has
a really user friendly interface.

## Alternatives

The following alternatives were also considered:

- [Wordpress](https://wordpress.com/)
- [Drupal](https://www.drupal.org/)
- [Contentful](https://www.contentful.com/)
- [Sitecore](https://www.sitecore.com/)

They were rejected for the following reasons:

- Wordpress and Drupal are not headless CMSs and are not suitable for this project - whilst they do have headless support, it is not their primary focus and is therefor not as feature rich as the other options.
- Contentful is not very user friendly.
- Sitecore is a good option but is really meant for large enterprises and is very high maintenance due to its complexity. It is also known for being resource intensive and requires a lot of technical knowledge to use.

## Sanity

### General observations

- The ‘hotspot and crop’ feature is great for making sure that images look great on all sizes as well as setting the ‘hot spot’ for a thumbnail.
- Has a bunch of really useful NextJS plugins
- Real-time collaboration feature creates immutable audit trail of changes
- Workflow tools are intuitive and also work in real-time
- Has localisation features built-in (with some config required)
- Building a [custom asset-source plugin](https://www.sanity.io/docs/custom-asset-sources) sounds fairly straightforward and would mitigate the issue with there being no Brandfolders integration. This may be a few (2-4) days worth of extra work that needs to be accounted for though.

### Pros

1. **Real-Time Collaboration:**
   - Offers real-time collaboration similar to Google Docs, making it easier for multiple team members to work on content simultaneously.
2. **Highly Customisable:**
   - Provides a fully customisable content studio that can be tailored to specific needs. Developers can define their schemas in JavaScript, making it flexible as well as giving developers control over the model, limiting the risk that the API and the site get out of sync.
3. **Portable Text:**
   - Features a block content editor that allows for highly portable and structured text, enhancing content flexibility and reuse.
4. **Developer-Friendly:**
   - Has a strong API-first approach with GraphQL support, making it very developer-friendly.
   - Offers a rich plugin ecosystem and integrations with various front-end frameworks.
5. **Flexible Data Model:**
   - Supports creating complex data structures and relationships, which is beneficial for large-scale and dynamic projects.
6. **Open Source:**
   - The Sanity Studio is open source, allowing for greater transparency and community contributions.
7. **Transparent pricing:**
   - Offers a free tier with transparent pricing for paid plans, making it accessible to small and medium-sized businesses. More information on pricing can be found [here](https://www.sanity.io/pricing). (Enterprise plans are available on request and start from $75,000/year - I don't think this is relevant to us though as it doesn't seem to offer anything that could justify that price)

### Cons

1. **Steeper Learning Curve:**
   - The high degree of customisation and flexibility can result in a steeper learning curve for new users.
2. **Has to be built by a developer**
   - Would add to the development time as the developers would be solely responsible for implementation of the CMS.
   - The CMS would be less user friendly than Contentstack, requiring developers to be involved with ongoing maintenance and updates.
   - Developers would need to be involved in the content management process in some instances, which could be a bottleneck for the content team.
3. **No Brandfolders integration**
   - This would require a custom asset-source plugin to be built, adding to the development time and would then need to be maintained by the development team.

## Contentstack

### General observations

- No free tier but there a 2-week free trial
- No pricing options shown on website, there are three tiers (foundation, grow and scale) but you’d have to speak to a rep to find out what the costs are. A screenshot of their site from 2021 suggests that the lowest tier could be around $1000/month.
- It appears that only 10 admin users are available within the CMS, regardless of the tier.
- The “modular blocks” approach to content is similar to the Wordpress ‘Gutenburg’ editor, allowing for drag and drop composing of components. This of course does mean that the editors need to be careful in how they structure their pages, this degree of editor freedom could result in the ‘MySpace’ effect.
- The CMS is just a web interface that delivers an API. Meaning that it will likely be much quicker to get it up and running and will probably be easily manageable by a content editor, rather than needing to specifically developer led. This would dramatically increase our productivity as the developers would be free to work on the UI itself rather than building out the CMS as well.

### Pros

1. **Ease of Use:**
   - Designed with a user-friendly interface, making it easier for non-technical users to manage content.
2. **Enterprise-Ready:**
   - Focuses on enterprise-level features like workflows, roles, and permissions, making it suitable for large organisations.
3. **Strong Support and Documentation:**
   - Provides extensive documentation and dedicated customer support, which can be crucial for enterprise customers.
4. **Scalability:**
   - Built to scale with high performance and reliability, catering to the needs of large and complex projects.
5. **Integrations:**
   - Supports numerous integrations with other enterprise tools and services, enhancing its capabilities. Includes a Brandfolders integration as part of it’s plugin marketplace.

### Cons

1. **Cost:**
   - No free tier available, and pricing is not transparent, which can be a barrier for smaller projects. Primarily targeted at enterprises, ContentStack can be expensive, especially for small to medium-sized businesses.
2. **Limited Customisation:**
   - While it offers a high degree of flexibility, it may not be as customisable as other headless CMS platforms.
3. **Proprietary code:**
   - Contentstack is closed-source, whereas Sanity is open-source, this in itself isn’t a real issue but it means there will be fewer community resources available for Contentstack and support will be by the Contentstack team, rather than the OS community (I do’t see this being an issue though as support seems to be built into the cost)

## Recommendation

Because of two primary reasons, I have to recommend using Contentstack over Sanity:

1. Contentstack is almost entirely UI driven. This means that it is very easy to use and requires
   very little technical knowledge to get started. It also means that we can use our short
   development time to focus on building the application rather than building the CMS.
2. Contentstack has a very user friendly interface and requires very little training to get started.
   This is a big advantage for non-technical users who need to manage content.

## Discussions

- Alex Foxleigh - This is the place to discuss the ADR. Please keep the discussion
  on topic and try to avoid repeating the same points. Please put your name next to
  any points you make.

## Decision

Implement Sanity into the application. Contentstack is a great option but it is very expensive and the cost does not justify the benefits. Sanity is a great option and will allow us to build a very flexible and powerful CMS.

## Consequences

- The development time will be increased slightly as the developers will need to build the CMS.
- There will be a small learning curve for new developers.
- The CMS will ultimiately be more powerful and flexible than Contentstack.
- A custom integration will need to be built for Brandfolders.

[proposed]: https://img.shields.io/badge/Proposed-yellow?style=for-the-badge
[accepted]: https://img.shields.io/badge/Accepted-green?style=for-the-badge
[superceded]: https://img.shields.io/badge/Superceded-orange?style=for-the-badge
[rejected]: https://img.shields.io/badge/Rejected-red?style=for-the-badge
[deprecated]: https://img.shields.io/badge/Deprecated-grey?style=for-the-badge