import React, { useEffect, useState } from 'react';
import './AccCompPage.css';

const AccCompPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    <div className="case-study-container">
      <header>
        <h1><strong>Accessible Components Case Study</strong></h1>
      </header>
      <section>
        <h2> Overview & Objectives</h2>
        <ul>
          <li>Understand how components incorporate accessibility for user interaction</li>
          <li>Understand components as having multiple forms of input (mouse, keyboard) and output (visual style, text, labels for screen readers)</li>
          <li>Modify an existing component to make a trade-off between learnability, memorability, efficiency, and accessibility</li>
        </ul>
      </section>

        <section>
          <h2>Background</h2>
          <p>Components are reusable elements that we as designers use to create and manage consistent designs. For this case study, I chose to focus on dropdown menus.</p>
          <br />
          <ul>
            <li>Contributors: Zeeshan Bhalwani</li>
            <li>Timeline: 2 Weeks</li>
            <li>Tools: Figma</li>
            <li> Focus: Specifically focused on the dropdown menus in <u>Google Chrome, Zoom, and Spotify</u></li>
          </ul>
        </section>
        
        <section>
          <h2>Part 1: Evaluating Dropdown Menu Accessibility Across Apps</h2>
          <p>Analyzed the accessibility of dropdown menus in Google Chrome, Zoom, and Spotify across various input methods (mouse, keyboard, touch).</p>
          <br />
          <ul>
              <li><strong>Ellipsis Button Familiarity:</strong> Zoom and Spotify&apos;s use of the ellipsis button is intuitive and universally recognized, simplifying menu discovery.</li>
              <li><strong>Keyboard Navigation Gaps:</strong> Chrome excels in keyboard shortcuts, but Zoom skips the ellipsis button when tabbing, blocking full keyboard access.</li>
              <li><strong>Touch-Friendly Design:</strong> Spotify and Chrome use half-expanded menus and swipeable elements, balancing visibility and space efficiency.</li>
          </ul>
          <br />
          <div className="triangle-images">
            <img src="/chrome.png" alt="Image 1" />
            <img src="/spotify.png" alt="Image 2" />
            <img src="/zoom.png" alt="Image 3" />
          </div>

        </section>

        <section>
          <h2>Part 2: User Feedback on Interaction and Visual Cues</h2>
          <p>Observed how users interact with dropdowns, focusing on visual feedback, focus order, and screen reader compatibility.</p>
          <br />
          <ul>
              <li><strong>Visual Feedback Clarity:</strong> Hover and click actions provide clear visual cues, but Chrome lacks option highlighting for touch users.</li>
              <li><strong>Screen Reader Detail:</strong> Chrome reads item counts and labels, while Spotify struggles with screen reader categorization for complex menus.</li>
              <li><strong>Focus Order Efficiency:</strong> Spotify&apos;s tab order is fast, but the lack of clear category groupings makes memorization difficult.</li>
          </ul>
        </section>

        <section>
          <h2>Part 3: Redesigning Spotify&apos;s Dropdown Menu</h2>
          <p>Implemented accessibility improvements for Spotify&apos;s menu, like scrollable buttons, shortcut hints, and persistent menus.</p>
          <br />
          <ul>
              <li><strong>Shortcut Integration:</strong> Adding shortcuts boosts efficiency for power users, but raises the initial learning curve.</li>
              <li><strong>Scrollable Buttons:</strong> Reduces cognitive load, though screen readers need cues for hidden options.</li>
              <li><strong>Persistent Menus:</strong> Keeping menus open for batch actions reduces effort for keyboard users but may confuse casual users.</li>
          </ul>
          <br />
          <div className="image-container">
            <img src="/states.png" alt="State Models" onClick={openModal} />
            <br />
            <img src="/new_spotify.png" alt="final product" onClick={openModal} />
          </div>
        </section>

        <section>
            <h2>Part 4: Bridging Accessibility Gaps</h2>
            <p>Reflected on design revisions, addressing mismatches to create a more inclusive experience, inspired by Chrome’s shortcut hints and Zoom’s keyboard navigation.</p>
            <br />
            <ul>
                <li><strong>Addressing Mismatches:</strong> Added features like color-coded actions and WASD support to reduce cognitive load and improve keyboard efficiency.</li>
                <li><strong>Inclusive Prioritization:</strong> While touch and mouse interactions are often prioritized, better keyboard and screen reader support is essential for true accessibility.</li>
                <li><strong>Resilient Design:</strong> Highlighted the need for text resizing and high-contrast support to prevent menu breakage for visually impaired users.</li>
            </ul>
        </section>

    <section>
      <h2>Valuable Lessons Learned</h2>
        <p>Throughout the analysis and redesign process, several key insights emerged about accessibility, usability, and inclusive design practices.</p>
        <br />
        <ul>
            <li><strong>Accessibility Is Multifaceted:</strong> Designing for accessibility requires balancing multiple input methods (mouse, keyboard, touch) and considering varied user needs, like screen readers and motor impairments.</li>
            <li><strong>Customization Can Reduce Cognitive Load:</strong> Allowing users to tailor their navigation experience with features like shortcuts, scrollable menus, and persistent states boosts efficiency and usability.</li>
            <li><strong>Small Changes Have Big Impacts:</strong> Simple tweaks, like adding shortcut hints or grouping related options, can significantly improve accessibility without overhauling the entire design.</li>
        </ul>
  </section>


      <section>
        <h2>Complete Analysis</h2>
        <iframe src="/acc_comp_pg.pdf" width="100%" height="600px"></iframe>
      </section>

      <footer>
        <p>© 2025 Zeeshan Bhalwani. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default AccCompPage;