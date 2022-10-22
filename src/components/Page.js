import React from "react";
import Twitter from "../images/logo/Shape (1).png";
import PicsArt from "../images/logo/Shape (2).png";
import FaceBook from "../images/logo/Shape.png";
import Image1 from "../images/Image1.png";
import Image2 from "../images/Image2.png";
import Image3 from "../images/Image3.png";
import Image4 from "../images/Image4.png";
import Logo from "../images/Image5.png";
export default function Page() {
  return (
    <div className="">
      <p>
        Home — Reading lists — UX Design — 10 Reasons to Build Your Website with
        WP Page Builder
      </p>
      <div>
        <div>
          <li>
            <img src={Twitter} alt="" />
          </li>
          <li>
            <img src={PicsArt} alt="" />
          </li>
          <li>
            <img src={FaceBook} alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
        </div>
        <div>
          <img src={Image1} />
        </div>
        <div>
          <p>heart symbol</p>
          <p>eye symbol</p>
        </div>
      </div>
      <p>
        People’s quest for creating websites has easily taken us to a new era of
        site development. Where, with the availability of robust page building
        tools, creating websites has become a lot more fun (especially for
        non-developers). The multitude of tools and plugins available to you is
        vast when you try building websites on WordPress. Today we’ll explore a
        new one, WP Page Builder. If you’re tired of the same old page builder
        plugins, this is one you should try out.
      </p>
      <h2>What’s Special About WP Page Builder?</h2>
      <p>
        Wondering what makes WP Page Builder so special? I would say, what
        doesn’t? It’s developed by the team over at Themeum, who has been
        creating WordPress themes since 2013. As mentioned above, the plugin is
        a full pack of essential site building elements with all modern the
        modern functionality you’ve come to expect from a page builder plugin.
        Let’s have a look below at all of the juicy features WP Page Builder
        includes.
      </p>
      <img src={Image2} />
      <p>Here are some of the amazing add-ons included: </p>
      <p>
        <span>• Form:</span> Create web forms effortlessly. It gives you a
        convenient way to style your forms as you desire. The Form add-on itself
        is capable of setting up any kind of form without needing to install any
        plugin. Moreover, you can manage form plugins and enable reCAPTCHA with
        just a simple click. There is also an add-on for Contact Form 7 if you
        prefer.
      </p>
      <p>
        <span>• Carousel:</span> It’s hard to find an advanced add-on like a
        carousel in a free page builder plugin, but WP Page Builder lets you
        create stunning hero sliders without having to pay for it.
      </p>
      <p>
        <span>• Post Grid:</span>
        Display blog posts in grids defining the number of posts and styling the
        look.
      </p>
      <p>
        <span>• Feature Box:</span> Use the Feature Box add-on to display the
        features of products on your website.
      </p>
      <p>
        <span>• Accordion:</span> Need any collapse text content on your site?
        Use WP Page Builder’s Accordion add-on and modify the style the way you
        want.
      </p>

      <div>
        <div>
          <img src={Image3} alt="Image" />
        </div>
        <div>
          <img src={Image4} alt="Image" />
        </div>
      </div>

      <p>
        “ WP Page Builder offers a lot of ready-to-use design blocks to make
        your site development process a lot faster and easier “
      </p>

      <div>
        <img src={Logo} alt="Image" />
        <p>TOMAS LAURINAVICIUS</p>
        <p>
          Follow me <span>@JohnAMWill.</span>
        </p>
      </div>
    </div>
  );
}
