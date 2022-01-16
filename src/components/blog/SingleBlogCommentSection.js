import React from 'react'
import { Link } from 'react-router-dom'
import comment_img from '../../assets/images/comment-img.png'

const SingleBlogCommentSection = () => {
    return (
        <div className='comment-section'>
            <h3 className='c-title'>Leave a reply</h3>
            <p className='c-h'>Already have an account? <Link to="/">Sign In</Link> to leave a reply</p>

            <div className='comment-form'>
                <form>
                    <div className='flex-col'>
                        <div className='form-group'>
                            <label>Name</label>
                            <input type="text" className='input-field' placeholder='Name' />
                        </div>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type="email" className='input-field' placeholder='Email address' />
                        </div>
                    </div>
                    <div className='form-group checkbox-style'>
                        <label>
                        <input type="checkbox" className='input-field' />Save my name and email in this browser for a next time comment.</label>
                    </div>
                    <div className='form-group c-textarea'>
                        <label>Comment</label>
                        <textarea className='' rows="10" placeholder='Space for your comments'></textarea>

                    </div>
                        <button className="btn-comment" type="submit">Send a comment</button>
                   
                </form>
            </div>

            <div className='comments-area'>
                <h4>Comments</h4>

                <div className='comments'>
                    <div className='comment'>
                        <div className='comment-header'>
                            <img src={comment_img} alt="" />
                            <div className='metadata'>
                                <p>Author</p>
                                <span className='comment-date'>22,3,2022</span>
                            </div>
                            <label className='comment-lable-admin'>Admin</label>
                        </div>
                        <div className='comment-body'>
                            <p>
                                Hi everyone, 
                                we have been working hard with the team bringing a new articles. It has passed a few months till we released it in case of traveling and shooting, hopefully you’ll love it.
                            </p>
                        </div>
                    </div>
                    <div className='comment reply'>
                        <div className='comment-header'>
                            <img src={comment_img} alt="" />
                            <div className='metadata'>
                                <p>Author</p>
                                <span className='comment-date'>22,3,2022</span>
                            </div>
                            <label className='comment-lable-customer'>Admin</label>
                        </div>
                        <div className='comment-body'>
                            <p>
                                Hi everyone, 
                                we have been working hard with the team bringing a new articles. It has passed a few months till we released it in case of traveling and shooting, hopefully you’ll love it.
                            </p>
                        </div>
                    </div>
                    <div className='comment'>
                        <div className='comment-header'>
                            <img src={comment_img} alt="" />
                            <div className='metadata'>
                                <p>Author</p>
                                <span className='comment-date'>22,3,2022</span>
                            </div>
                            <label className='comment-lable-admin'>Admin</label>
                        </div>
                        <div className='comment-body'>
                            <p>
                                Hi everyone, 
                                we have been working hard with the team bringing a new articles. It has passed a few months till we released it in case of traveling and shooting, hopefully you’ll love it.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleBlogCommentSection
