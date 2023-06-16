import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const BlogPost = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Windows 11 AI Integration Signals New Era for User Experiences
          </h1>
          <p className={styles.desc}>
            When I joined IBM in the 1980s, they assigned me the task of helping
            create what eventually became one of the very first CRM
            applications. Like most at that time, I had to work with MIS (now
            called IT), and the result was dreadful. Instead of the app making
            things easier by automating many repetitive manual tasks, it
            required more labor, was incredibly annoying to use, and showcased a
            disconnect between what I thought I’d asked for and what MIS
            delivered. This experience was far from uncommon because, even
            though I could code, the MIS folks didn’t understand the business.
            They tended to make decisions in a vacuum that undoubtedly made
            their job easier in terms of creating the app, but that made users’
            jobs far harder because the users had surprisingly little to do with
            the process. Well, AI is about to change that by gradually turning
            users into programmers. Microsoft is at the forefront of this with
            its efforts to place increasing AI capability into Windows, Office,
            and the Microsoft Store. Let’s explore how Microsoft AI will benefit
            collaboration and user experiences, and we’ll close with my Product
            of the Week: a new set of headphones from Dell’s Alienware unit that
            look like nothing you’ve ever seen.
          </p>
          <div className={styles.author}>
            <Image
              src="https://www.technewsworld.com/wp-content/uploads/sites/3/2022/09/Windows-11.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Rob Enderle</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://www.technewsworld.com/wp-content/uploads/sites/3/2022/09/Windows-11.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>The Bad Developer Joke
A Facebook post said something like, “Giving users the ability to work with AIs to code will mean that users will finally need to articulate what they want, so your jobs are safe.”

The implication was that users generally don’t know what they want, so giving them the ability to create directly with AI will end badly. However, both my experience and this joke highlight the underlying issue that programmers and users lack training in collaborating with each other.

Part of the underlying problem is that programmers typically have little interest in business operations, and operations employees have little interest in coding. Since neither side generally wants to learn the nuances of the other, this can lead to some very unsatisfied users and very frustrated programmers.

AI has the capability to break through this problem because, as it advances, it will naturally attempt to learn about the user and be better able, over time, to provide an outcome closer to what the user should want.

I say “should” because, in my experience, often one of the problems when creating an app is that the user hasn’t thought through what they want entirely. Only after seeing the draft app will they suddenly realize that what they want isn’t anything like what they got.

AI gets around this problem by not having a personality, so it doesn’t get irritated, angry, or frustrated. It learns through iteration and is willing to iterate infinitely to approach closing unmet user needs.

But users and programmers will still need to develop competence with the tool. Otherwise, they will likely become frustrated with the endless iterations that result because the user cannot completely articulate what they want, and particularly what they don’t want, in the new app.

Windows 11 Baseline
By placing generative AI into Windows, Microsoft creates a forcing function trend where users will learn how to work with generative AI to get better results. They will have to learn to fully articulate their needs to lower the number of annoying iterations the AI has to go through to understand those needs, and, most importantly, users will have to develop the skills needed to understand and communicate what they want.

We’ve had some mixed results with this kind of thing. Boolean logic is what the internet has used to refine searches. Those who learned Boolean logic found they could get the results they wanted far more quickly than those who didn’t. Still, we aren’t exactly up to our necks in Boolean logic users on the web, showcasing that the weak link remains users who refuse to learn the skills needed to become more efficient.

The difference with AI, however, is that AI can help bridge the gap by learning what makes a particular user unique and attempting to bridge the knowledge and experience gap. Unlike Boolean logic, which is static, the AI will evolve to become a much more personalized interface for the user and substantially reduce the need for the user to have a unique AI communications skill set.</p>
      </div>
    </div>
  );
};

export default BlogPost;
