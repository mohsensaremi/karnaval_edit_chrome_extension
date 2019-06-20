chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            $.each($("[data-post-id]"), (index, value) => {
                $(value).css('position', 'relative');
                const dataId = $(value).data('post-id');
                $(value).append(
                    '<a ' +
                    'target="_blank" ' +
                    'href="https://www.karnaval.ir/v2/public/dashboard/redirect/edit-post/' + dataId + '" ' +
                    'style="position: absolute;bottom: 0;left: 0;font-size: 26px;width: 24px;height: 30px;color:#35b995;">' +
                    '&#x270E' +
                    '</a>'
                )
            });
            $.each($("[data-single-post-id]"), (index, value) => {
                console.log("value", value);
                const dataId = $(value).data('single-post-id');
                $('body').append(
                    '<a ' +
                    'target="_blank" ' +
                    'href="https://www.karnaval.ir/v2/public/dashboard/redirect/edit-post/' + dataId + '" ' +
                    'style="position: fixed;bottom: 4px;left: 4px;font-size: 31px;width: 49px;height: 40px;padding-top: 9px;color:#fff;background-color: #35b995;border-radius: 50%;display: flex;align-items: center;justify-content: center">' +
                    '&#x270E' +
                    '</a>'
                )
            });
        }
    }
);
