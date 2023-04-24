sub Main()
	msgPort = CreateObject("roMessagePort")
	r = CreateObject("roRectangle", 0, 0, 1920, 1080)

	config = {
		' change URL to be your live-server address
		url: "file:///index.html",
		javascript_enabled: true,
		nodejs_enabled: true,
		brightsign_js_objects_enabled: true,
		storage_path: "sd:/browser_data",
		hwz_default: "on",
		security_params: { websecurity: false },
		inspector_server: { port: 2999 }
	}
	h = CreateObject("roHtmlWidget", r, config)
	h.SetPort(msgPort)
	sleep(500)
	h.Show()
	while true
		ev = Wait(0, msgPort)
		print "---Received Event ";type(ev)
	end while
end sub