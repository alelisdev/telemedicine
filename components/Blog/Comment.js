import React from 'react';
import { parseISOString } from '../../utils/funcUtils';

function CommentItem (props) {    

    const handleClickThumpsUp = () => {
        props.handleOpen(true);
        props.setActive(props.comment._id);
        props.setIsUp(true);
    }

    const handleClickThumpsDown = () => {
        props.handleOpen(true);
        props.setActive(props.comment._id);
        props.setIsUp(false);
    }

    return(
        <div className='comment-item row m-2 fade-in'>
            <div className='col-lg-2 pt-3 text-center'>
                <picture><img className='comment-avatar' src='/images/default-image.png' alt='avatar' /></picture>
            </div>
            <div className='col-lg-10 d-flex flex-column pt-3'>
                <div className='comment-title'>
                    <ul>
                        <li>
                            <i className="icofont-businessman"></i> { props.comment.name }
                        </li>
                        <li>
                            <i className="icofont-calendar"></i> {parseISOString(props.comment.date)}
                        </li>
                    </ul>
                </div>
                <p className='comment-content'>{props.comment.content}</p>
                <div className='comment-title'>
                    <ul>
                        <li>
                            <a style={{cursor: 'pointer'}} onClick={handleClickThumpsUp}>
                                <i className="icofont-thumbs-up"></i> { props.comment.upCnt }
                            </a>
                        </li>
                        <li>
                            <a style={{cursor: 'pointer'}} onClick={handleClickThumpsDown}>
                                <i className="icofont-thumbs-down"></i> { props.comment.downCnt }
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CommentItem;