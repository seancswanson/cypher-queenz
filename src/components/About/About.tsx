import React, { FC } from 'react';
import './About.css';

interface AboutProps { }

const About: FC<AboutProps> = () => (
  <div className="About">
    <div className="about-container">
      <h2>MISSION</h2>

      <p>To create a space for Bgirls to learn, session, cypher and build community elevating women in the Seattle Hip Hop breakin scene.</p>

      <h2>VISION</h2>

      <p>Empower and uplift women in the Hip Hop breakin scene for a healthier, safe and balanced environment that will benefit all communities.</p>

      <h2>HISTORY</h2>

      <p>Since 2001 three Bgirls, Naj, Bean and Lee dived into the breakin' culture that quickly became a huge part of their expression, growth and purpose. Over the years there was a growing desire to create more space for other Bgirls that was not intimidating and celebrated women. Their strong connection as women was a main factor in encouraging each other to continue their passion in the breakin' scene. They asked themselves, "would more Bgirls start and stick around if we did more for them? Yes!"</p>

      <p>CYPHER Queenz began in 2019 after many years of seeing a need for more community for Bgirls. We give props to all the Bgirls who have been holding it down for a long time, but have observed many women briefly coming into the scene and then quickly leaving because of lack of support. There is an explosion of talented Bgirls all over the world now and there is so much more to come. In Seattle, we want to provide that space for them.</p>

      <h2>VALUES</h2>

      <div className="value-container">
        <p><span className="value-title">Beginner friendly – no experience needed</span>We teach and support women just getting started from day one.</p>
        <p><span className="value-title">Honoring the roots</span> We want to pay respect and spread knowledge honoring the roots of Hip Hop from the Black and Brown community, particularly highlighting women in this history.</p>
        <p><span className="value-title">Inclusivity</span> We value being an inclusive welcoming environment for all regardless of gender and sexual identity, race and ethnicity, economic and faith backgrounds.</p>
        <p><span className="value-title">Community driven</span> We are volunteer run where all profits and donations go back into improving Cypher Queens events for the community.</p>
        <p><span className="value-title">Toxic free behavior</span> We do not tolerate behavior that minimizes and abuses others for individual gains, rather we focus on unity through building community.</p>
        <p><span className="value-title">Creative expression</span> We value art forms for expression beyond bgirling that enhance women and the Hip Hop community.</p>
        <p><span className="value-title">Empowerment focused</span> We want to create an environment that strengthens and empowers individuals into a mature focus of using gains to help the most vulnerable in society.</p>
      </div>
    </div>
  </div>
);

export default About;
