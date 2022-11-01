import React, { useState } from "react";
import { FaqItem } from "./FaqItem";
import styles from "./styles.module.scss";
import clsx from "clsx";
import lissajous from "../../images/lissajous.svg";
const FaqList = () => {
  const faq = [
    {
      title: "When is Stride?",
      content:
        "Stride takes place on Saturday, February 5th, 2022. It will be from 9am-2pm with a break from 11am-12pm. This year, Stride will be a completely virtual event held over Zoom",
    },
    {
      title: "What will Stride look like on Zoom?",
      content:
        "Students will be sorted into breakout rooms with a recruiter. For the most up-to-date information, check our social media @ucsddesignco.",
    },
    {
      title: "Who can attend Stride?",
      content:
        "All UCSD students and alumni are welcome! There is a limited number of recruiters and time with each one (~15 min), so students will be assigned to breakout rooms on a first come first serve basis. Be sure to sign up and secure your spot through our registration form by Tuesday, 2/1.",
    },
    {
      title: "How should I dress for Stride?",
      content:
        'While there is no dress code for Stride, we do recommend making sure you look “presentable” (at least in your Zoom window!). What "presentable" looks like is up to you—some people dress in business attire, while others dress as they normally do.',
    },
    {
      title: "How can I prepare for Stride?",
      content:
        "From preparing a portfolio to revamping your resume, we've put together a slide deck for you with advice on how to prepare yourself for Stride. Due to the virtual nature of Stride 2022, we suggest having any materials ready to go on your computer, along with a stable Internet connection, mic, and webcam.",
    },
    {
      title: "Do I need a portfolio?",
      content:
        "While a portfolio is not required, we HIGHLY recommend having a portfolio and being able to talk about some of your past projects.",
    },
    {
      title: "Where can I access the Zoom link?",
      content:
        " Only registrants will receive access to the Stride Zoom link. After you register, we will send the Zoom link to your preferred email.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      {" "}
      <ul className={styles.faqList}>
        <div className={clsx(styles.decoration, styles.left)}>
          <img src={lissajous} role="presentation" />
        </div>
        <ul>
          {faq.map((item, index) => (
            <FaqItem
              {...item}
              openIndex={openIndex}
              index={index}
              handleClick={(i) => {
                setOpenIndex(i);
              }}
            />
          ))}
        </ul>
        <div className={clsx(styles.decoration, styles.right)}>
          <img src={lissajous} role="presentation" />
        </div>
      </ul>
    </>
  );
};

export default FaqList;
