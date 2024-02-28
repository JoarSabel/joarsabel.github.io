---
title: 'First post: What is Astro?'
pubDate: 2024-02-28
description: 'What in the world is Astro and is it any good? A look into the Astro Framwork and its capabilities.'
author: 'Joar'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'The full Astro logo.'
tags: ["astro", "blogging", "learning", "web development", "frameworks"]
---

![Graz](../../turbotest.jpg)

> Alright, so let's actually try to write something useful for once.

-Me, just now.

## Introduction

*Disclaimer: The introduction section is mostly just a roundabout way of explaining how I chose to work with astro, with some "jokes" mixed in there.*

I first heard of [Astro](https://astro.build/) via Reddit some time ago, but gave it little thought as I, perhaps foolishly,
just thought of it as another JavaScript framework amongst the horde of already existing and constantly emerging frameworks.
But then one day I decided that I should build this website, and I had to decide on how to do it. Now some would say, that for something
this simple one should just use basic HTML, CSS and perhaps, if feeling bold enough, some JavaScript. But that, well that just 
wouldn't fit in with my _zoomer_ ~~grind~~mindset. So I went looking for some framework. Considering that looking at React makes me want
to have eye-reduction surgery, that I already am a Vue-tiful person and that Svelte is just a misspellled swedish word for starvation I decided to 
go for the "new" kid on the block.

## Why another framework? 

So, you might be thinking, just like I was, "Why do we need yet _another_ framework...". Well if you've somehow landed on this post 
instead of the excellently written [astro docs](https://docs.astro.build/en/concepts/why-astro/) then that's pretty cool and since
you made the effort I'll try to do a quick summary.

As per the docs: 
> Astro is the web framework for building content-driven websites like blogs, marketing, and e-commerce.

So this framework is explicitly made for more static content, it's made for people who want good search engine optimization (SEO)
and fast load times. What is especially great about astro is that you can deploy it to Github pages if you're cheap like me, 
but we will get to that. Just because its focus is on blogs, e-commmerce and such does not mean you can't work with it, in cooperation with 
other UI frameworks, like React, Vue, and Svelte (HTMX not mentioned, it's so over?). I have not tried working with Astro 
as part of another framework yet, but considering the generally high opinion of people regarding this framework I would bet 
the experience is atleast okay. You can find more info about framework components [here](https://docs.astro.build/en/guides/framework-components/).  

Other selling points for the framework are "Islands", its server-first approach, <3 Zero JS, by Default <3 and so on.
But the feature that stood out to me the most, due to the nature of this website that I am/was writing was 
[content collections](https://docs.astro.build/en/guides/content-collections/)

## Content collections

Let's talk a bit about this. Content collections are _great_ for any blog-like website or something similar. 
It provides an easy way to manage you markdown documents, like this post for example, and provide great means for organizing
your frontmatter. It makes it easy to just write you blog post/marketing thing/other stuff as markdown and have it easily rendered. 
The content collections can be easily ordered into sections by their directory structure, so one might have `blog/` and `newsletter/`
which could then easily be retrieved as separate collections using Astro's content API.

--- 
cont
