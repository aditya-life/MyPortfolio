const About = () => {
    return (
        <section className="container py-5" id="about">

            <div className="row d-flex align-items-center g-5 py-5">

                {/* Image Section */}
                <div className="col-12 col-md-10 col-lg-6 mx-auto text-center order-lg-2">
                    <img
                        src="https://camo.githubusercontent.com/88adc7c88c9d3dba7479020846ed35d13410e3707c7f149e1c6140cc6beaef9a/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966"
                        className="img-fluid rounded-4 shadow"
                        alt="About Aditya Kumar"
                        loading="lazy"
                        style={{
                            maxHeight: "380px",
                            objectFit: "cover",
                            width: "100%"
                        }}
                    />
                </div>

                {/* Text Section */}
                <div className="col-lg-6 order-lg-1 text-center text-lg-start">

                    <h1 className="display-5 fw-bold text-primary lh-1 mb-4">
                        About Me
                    </h1>

                    <p className="lead text-secondary">
                        I build scalable web applications with clean UI and secure backend APIs using the
                        <span className="fw-semibold text-dark"> MERN stack.</span>.
                    </p>

                    <p className="lead text-secondary">
                        I specialise in debugging, performance optimization, and real-world production development.
                        Currently contributing to live client features as a Web Development Intern.
                    </p>
                </div>

            </div>

        </section>
    );
};

export default About;
