import React from 'react';

const CommentForm = () => {
    return (
        <div className="blog-details-form pb-100">
            <div className="blog-details-form-wrap">
                <h2>Drop your coomment</h2>
                <form>
                    <div className="form-group">
                        <textarea className="form-control" id="your_comments" rows="8" placeholder="Your Comments"></textarea>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                        </div>
                    </div>
                    <div className="text-left">
                        <button type="submit" className="btn blog-details-form-btn">Post A Comment</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CommentForm;