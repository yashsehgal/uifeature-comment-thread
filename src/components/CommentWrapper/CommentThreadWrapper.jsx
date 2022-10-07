export default function CommentThreadWrapper({threadData}) {
    return (
        <div className="comment-thread-wrapper flex flex-col items-start justify-start gap-2">
            {threadData?.map((threadItem, threadIndex) => (
                <div className="thread-wrapper p-2 w-full bg-gray-200" id={"threadItem-" + threadIndex} key={threadIndex}>
                    <div className="flex w-full px-3 py-2 h-auto flex-row items-center justify-between">
                        <span className="reply-content-wrapper flex flex-row items-start justify-start gap-3">
                            <span className="px-2 py-1 rounded bg-indigo-500 font-normal text-white text-xs">{"Comment"}</span>
                            <span className="reply-content-innerText-wrapper">{threadItem?.content}</span>
                        </span>
                        <span className="reply-time-wrapper text-xs text-gray-400 font-normal">
                            {"at, " + threadItem?.time?.hours + ":" + threadItem?.time?.mins}
                        </span>
                    </div>
                    <div className="reply-thread-item-actions-layer-wrapper flex flex-row items-center justify-end gap-2">
                        <button className="flex text-xs text-gray-500 font-normal flex-row items-center justify-center py-1 px-2 rounded bg-gray-300 hover:brightness-90">
                            {"Reply"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}