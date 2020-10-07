Function Node_Initialize(msgPort As Object, userVariables As Object, bsp as Object)

  print "=== Node_Initialize - entry"

        h = {}
        h.version = "1.00.00"
        h.msgPort = msgPort
        h.userVariables = userVariables
        h.bsp = bsp
        h.ProcessEvent = Node_ProcessEvent
        h.objectName = "Node_object"

  nc = CreateObject("roNetworkConfiguration", 0)
  nc.SetHostName("brightsign-sfn-server")
  nc.Apply()

  nodePackage = createObject("roBrightPackage", bsp.assetPoolFiles.getPoolFilePath("node-server.zip"))
  CreateDirectory("node-server")
  nodePackage.Unpack("node-server/")

  url$ = "file:///sd:/node-server/node-server.html"

        htmlRect = CreateObject("roRectangle", 0, 0, 1920, 1080)
        is = { port: 2999 }
        config = {
        nodejs_enabled: true
        inspector_server: is
        brightsign_js_objects_enabled: true
      url: url$
        }
        h.htmlWidget = CreateObject("roHtmlWidget", htmlRect, config)
  h.htmlWidget.Show()
        return h

End Function

Function Node_ProcessEvent(event As Object) as boolean

        return false

End Function
