import './style.css';

function Team() {
    return ( 
        <section id="team" className="section-padding">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
        <div className="section-title">
          <h1 className="display-4 fw-semibold">Team Members</h1>
          <div className="line"></div>
          <p>QuadCode: Four Minds One Code</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3" data-aos="fade-down" data-aos-delay="150">
        <div className="team-member image-zoom">
          <div className="image-zoom-wrapper">
            <img className='rounded-circle' src="/images/WhatsApp Image 2024-11-13 at 4.22.28 PM (2).jpeg" alt="" />
          </div>
          <h5 className="mt-3">Daniel Mburu</h5>
          <a href="https://github.com/waweru89">Github</a>
        </div>
      </div>
      <div className="col-md-3" data-aos="fade-down" data-aos-delay="250">
      <div className="team-member image-zoom">
          <div className="image-zoom-wrapper">
            <img className='rounded-circle' src="/images/jr.jpeg" alt="Betty" />
          </div>
          <h5 className="mt-3">Betty Jelagat</h5>
          <a href="https://github.com/bettyje">Github</a>
        </div>
      </div>
      <div className="col-md-3" data-aos="fade-down" data-aos-delay="350">
      <div className="team-member image-zoom">
          <div className="image-zoom-wrapper">
            <img className='rounded-circle' src="/images/file.jpg" alt="" />
          </div>
          <h5 className="mt-3">Joses Thuo</h5>
          <a href="https://github.com/joses-kt">Github</a>
        </div>
      </div>
      <div className="col-md-3" data-aos="fade-down" data-aos-delay="350">
      <div className="team-member image-zoom">
          <div className="image-zoom-wrapper">
            <img className='rounded-circle' src="/images/jr.jpg" alt="" />
          </div>
          <h5 className="mt-3">Bravin Murambi</h5>
          <a href="https://github.com/bravvjr">Github</a>
        </div>
      </div>
    </div>
  </div>
</section>
     );
}

export default Team;