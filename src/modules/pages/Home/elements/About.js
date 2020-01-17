import React from 'react';
import { Link } from 'react-router-dom';

const About = props => {
  return (
    <section className="home__about">
      <div className="home__title">
        <h4 className="home__intro">Giới thiệu</h4>
      </div>
      <div className="home__info">
        <p>
          Mriure dolor in hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
          et iusto odio dignissim qui blandit praesent luptatum zzril delenit
          augue duis dolore te feugait nulla facilisi.Nam liber tempor cum
          soluta nobis eleifend option congue nihil imperdiet doming id quod
          mazim placerat facer possim assum. Typi non habent claritatem insitam;
          est usus legentis in iis qui faciteorum claritatem. Investigtiones
          demonstraverunt lectores legere me lius quod ii legunt
          saepius.Claritas est etiam processus dynamicus, qui sequitur
          mutationem consuetudium lectorum. Mirum est notare quam littera
          gothica, quam nunc putam
        </p>
        <Link className="home__see-more" to="#">
          Xem Thêm
        </Link>
      </div>
    </section>
  );
};

export default About;
