export default function NewCommentInputSection({
        threadResponseData, 
        updateThreadResponseData, 
        newCommentResponseVisibility, 
        updateNewCommentResponseVisibility }) {
    return (
        <div className="new-comment-input-section py-1">
            <span className="leading-snug select-none cursor-default uppercase text-xs text-gray-300 font-normal">{"REPLY HERE"}</span>
            <input type="text" 
                // defaultValue={""}
                id="reply-thread-input"
                className="w-full h-auto px-3 py-2 rounded border border-gray-200 hover:border-gray-300 focus:border-indigo-200" 
                onKeyDown={(inputEvent) => updateThreadSection(
                    {type:"keyboard", inputEvent}, 
                    threadResponseData, 
                    updateThreadResponseData, 
                    newCommentResponseVisibility, 
                    updateNewCommentResponseVisibility
                )}
            />
            <button className="mt-3 reply-button px-3 py-1.5 rounded-md bg-indigo-100 hover:bg-indigo-200 text-indigo-500 text-sm font-semibold flex flex-row items-center justify-center"
                onClick={() => 
                    updateThreadSection(
                        {type:"button", value:document.getElementById("reply-thread-input")?.value}, 
                        threadResponseData, 
                        updateThreadResponseData, 
                        newCommentResponseVisibility, 
                        updateNewCommentResponseVisibility
                    )
                }
            >
                {"Add Reply"}
            </button>
        </div>
    )
}

function updateThreadSection(inputEventResponse, threadResponseData, updateThreadResponseData, newCommentResponseVisibility, updateNewCommentResponseVisibility) {
    if ((inputEventResponse?.type === "keyboard" && inputEventResponse?.inputEvent?.key === "Enter" && inputEventResponse?.inputEvent?.target?.value)
        || (inputEventResponse?.type === "button" && inputEventResponse?.value)) {
        let newThreadResponseData = threadResponseData;
        newThreadResponseData.push({
            content: inputEventResponse?.type === "keyboard" 
                ? inputEventResponse?.inputEvent?.target?.value 
                : inputEventResponse?.value,
            time: {
                hours: new Date().getHours(),
                mins: new Date().getMinutes()
            }
        });
        updateThreadResponseData(newThreadResponseData);
        updateNewCommentResponseVisibility(!newCommentResponseVisibility);
    }
}