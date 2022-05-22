import React from 'react';

const ContactUs = () => {
    return (
        <div className="my-20">
            <div className="hero bg-secondary shadow-2xl max-w-7xl mx-auto rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-accent">Contac with us</h1>
                        <p className="py-6 text-accent">If you need to contact us, then please say something by using your email address</p>
                    </div>
                    <div className="card flex-shrink-0 lg:max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-primary font-bold">Your email & comment</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea class="textarea textarea-bordered" placeholder="Comments"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;