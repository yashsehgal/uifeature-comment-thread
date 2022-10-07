import React, { useState } from "react"
import { useEffect } from "react";
import CommentThreadWrapper from "./CommentThreadWrapper";
import NewCommentInputSection from "./NewCommentInputSection";

export default function CommentWrapper() {
    const [commentThread, setCommentThread] = useState([]);
    const [newCommentResponse, setNewCommentResponse] = useState(false);
    useEffect(() => {
        setCommentThread(commentThread);
    }, [commentThread]);
    return (
        <div className="comment-wrapper grid grid-cols-1 gap-4 w-fit">
            <div className="default-comment-container flex flex-row items-center justify-between w-[420px]">
                <h1 className="comment_default leading-snug text-base font-normal">{"Default Text"}</h1>
                <button className="reply-button px-3 py-1.5 rounded-md bg-indigo-100 hover:bg-indigo-200 text-indigo-500 text-sm font-semibold flex flex-row items-center justify-center"
                    onClick={() => setNewCommentResponse(!newCommentResponse)}
                >
                    {"Reply"}
                </button>
            </div>
            <div className="new-reply-wrapper">
                {newCommentResponse
                    ? <NewCommentInputSection 
                        threadResponseData={commentThread} 
                        updateThreadResponseData={setCommentThread} 
                        newCommentResponseVisibility={newCommentResponse}
                        updateNewCommentResponseVisibility={setNewCommentResponse} />
                    : <React.Fragment></React.Fragment>
                }
            </div>
            <div className="comment-thread-wrapper-section w-auto h-fit px-1 py-3 rounded border border-gray-300 bg-gray-100">
                <div className="px-2 overflow-x-hidden h-[240px] overflow-y-scroll">
                    {commentThread?.length > 0
                        ? <CommentThreadWrapper threadData={commentThread} />
                        : <span className="text-sm font-normal text-gray-400 italic">{"No reply found"}</span>
                    }
                </div>
            </div>
        </div>
    )
}