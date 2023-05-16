import React from "react";
import profileImage from "../../assets/Profile-Pic/ProfilePic.jpg";
import shadowImage from "../../assets/Profile-Pic/Shadow.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          Hi, I'm Christina! I'm a passionate learner currently pursuing my dreams of becoming a full stack developer through the coding bootcamp offered by the University of Toronto. I have always been fascinated by technology and its ability to shape the world we live in. With a strong desire to turn my passion into a career, I enrolled in this comprehensive bootcamp to gain hands-on experience in both front-end and back-end development. Through this immersive program, I'm acquiring valuable skills in HTML, CSS, JavaScript, as well as server-side technologies like Node.js and databases like MongoDB. I'm excited about the endless possibilities that coding offers and can't wait to apply my knowledge to create innovative solutions. 
          </p>
        </div>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={shadowImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          Outside of coding, balancing my passions for my dog Shadow, weekly board game nights with friends, and quality time with my family and partner brings immense joy to my life. Shadow's unwavering companionship and love light up my days, while the friendly rivalry and laughter shared during our weekly board game sessions create lasting memories. The moments spent with my family and partner are cherished, as we create a strong bond through shared experiences and meaningful connections. Together, these aspects of my life form a tapestry of happiness, reminding me of the importance of love, friendship, and cherished relationships.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;