const handleClick = () => {
	browser.sidebarAction.toggle();
}

browser.browserAction.onClicked.addListener(handleClick);