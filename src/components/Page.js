import React from "react";
import Twitter from "../images/logo/Shape (1).png";
import PicsArt from "../images/logo/Shape (2).png";
import FaceBook from "../images/logo/Shape.png";
import Image1 from "../images/Image1.png";
import Image2 from "../images/Image2.png";
import Image3 from "../images/Image3.png";
import Image4 from "../images/Image4.png";
import Image5 from "../images/Image5.png";
import Image6 from "../images/Image6.png";
import Image7 from "../images/Image7.png";
import Eye from "../images/logo/eye.png";
import Dil from "../images/logo/dil.png";
export default function Page() {
  return (
    <div className="bg-[#F9F9FB] pt-8 pb-32 text-default-black">
      <div className="w-3/4 ml-[19rem]">
        <p className="text-[0.6rem] text-passive">
          Home — Reading lists — UX Design — 10 Reasons to Build Your Website
          with WP Page Builder
        </p>
        <div className="flex space-x-5 ml-6 mt-4">
          <div className="space-y-4">
            <div className="w-8 bg-passive rounded-full h-8">
              <img
                className="rounded-full w-5 ml-2 pt-2"
                src={Twitter}
                alt=""
              />
            </div>
            <div className="w-8 bg-passive rounded-full h-8">
              <img
                className="rounded-full w-[10px] ml-3 pt-1"
                src={FaceBook}
                alt=""
              />
            </div>
            <div className="w-8 bg-passive rounded-full h-8">
              <img
                className="rounded-full w-5 ml-2 pt-1"
                src={PicsArt}
                alt=""
              />
            </div>
          </div>
          <div>
            <img className="w-[800px] rounded-md" src={Image1} alt="Display" />
          </div>
          <div>
            <img src={Dil} alt="Likes" className="w-8 h-7" />
            <p className="mt-1 mb-4 ml-1 font-bold">12k</p>
            <img src={Eye} alt="looks" className="w-8" />
            <p className="ml-1 font-bold">25k</p>
          </div>
        </div>
        <p className="w-[800px] ml-20 mt-3 text-xl leading-10">
          People’s quest for creating websites has easily taken us to a new era
          of site development. Where, with the availability of robust page
          building tools, creating websites has become a lot more fun
          (especially for non-developers). The multitude of tools and plugins
          available to you is vast when you try building websites on WordPress.
          Today we’ll explore a new one, WP Page Builder. If you’re tired of the
          same old page builder plugins, this is one you should try out.
        </p>
        <h2 className="w-[800px] text-3xl leading-10 ml-20 mt-16 text-heading">
          What’s Special About WP Page Builder?
        </h2>
        <p className="w-[800px] ml-20 text-xl leading-10 mt-5">
          Wondering what makes WP Page Builder so special? I would say, what
          doesn’t? It’s developed by the team over at Themeum, who has been
          creating WordPress themes since 2013. As mentioned above, the plugin
          is a full pack of essential site building elements with all modern the
          modern functionality you’ve come to expect from a page builder plugin.
          Let’s have a look below at all of the juicy features WP Page Builder
          includes.
        </p>
        <img
          className="w-[800px] ml-20 rounded-md mt-6"
          src={Image2}
          alt="Display"
        />

        <p className="w-[800px] text-xl leading-10 ml-20 mt-10">
          <p className="mb-8">
            Here are some of the amazing add-ons included:{" "}
          </p>
          <span className="font-bold mr-2 text-heading">• Form:</span>Create web
          forms effortlessly. It gives you a convenient way to style your forms
          as you desire. The Form add-on itself is capable of setting up any
          kind of form without needing to install any plugin. Moreover, you can
          manage form plugins and enable reCAPTCHA with just a simple click.
          There is also an add-on for Contact Form 7 if you prefer.
          <p className="mt-10">
            <span className="font-bold mr-2 text-heading">• Carousel:</span>{" "}
            It’s hard to find an advanced add-on like a carousel in a free page
            builder plugin, but WP Page Builder lets you create stunning hero
            sliders without having to pay for it.
          </p>
          <p className="mt-10">
            <span className="font-bold mr-2 text-heading">• Post Grid:</span>
            Display blog posts in grids defining the number of posts and styling
            the look.
          </p>
          <p className="mt-10">
            <span className="font-bold mr-2 text-heading">• Feature Box:</span>{" "}
            Use the Feature Box add-on to display the features of products on
            your website.
          </p>
          <p className="mt-10">
            <span className="font-bold mr-2 text-heading">• Accordion:</span>{" "}
            Need any collapse text content on your site? Use WP Page Builder’s
            Accordion add-on and modify the style the way you want.
          </p>
        </p>

        <div className="flex space-x-5 justify-between w-[800px] ml-20 mt-12">
          <div>
            <img
              className="rounded-md image-responsive"
              src={Image3}
              alt="Display"
            />
          </div>
          <div>
            <img
              className="rounded-md image-responsive"
              src={Image4}
              alt="Display"
            />
          </div>
        </div>

        <p className="italic font-normal w-[800px] ml-20 text-center text-quote text-2xl leading-loose tracking-tighter mt-20">
          “ WP Page Builder offers a lot of ready-to-use design blocks to make
          your site development process a lot faster and easier “
        </p>

        <div className="ml-20 w-[800px] flex flex-col items-center text-heading">
          <img className="rounded-full w-20 my-7 " src={Image5} alt="Display" />
          <p className="text-lg font-bold">TOMAS LAURINAVICIUS</p>
          <p className="text-base">
            Follow me <span className="text-tag">@JohnAMWill.</span>
          </p>
        </div>
        <p className="w-[800px] ml-20 mt-36 text-4xl leading-10 mb-8 text-heading">
          You might also like...
        </p>
        <div className="w-[800px] ml-20 space-x-5 flex justify-between">
          <div>
            <img className="rounded-md" src={Image6} alt="Display" />
            <p className="my-5">
              <span className="text-passive">BY</span> TOMAS LAURINAVICIUS{" "}
              <span className="text-passive"> IN </span> DESIGN PROCESS
            </p>
            <p className="text-2xl font-semibold tracking-tight leading-10 text-heading">
              Web page layout 101: website anatomy every designer needs to learn
            </p>
            <p className="text-base text-passive mt-4">
              User research is the reality check every project needs. Here’s our
              guide to why you should be doing it — and how to get started.
            </p>
          </div>
          <div>
            <img className="rounded-md" src={Image7} alt="Display" />
            <p className="my-5">
              <span className="text-passive">BY</span> TOMAS LAURINAVICIUS{" "}
              <span className="text-passive"> IN </span> DESIGN PROCESS
            </p>
            <p className="text-2xl font-semibold tracking-tight leading-10 text-heading">
              Web page layout 101: website anatomy every designer needs to learn
            </p>
            <p className="text-base text-passive mt-4">
              User research is the reality check every project needs. Here’s our
              guide to why you should be doing it — and how to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
