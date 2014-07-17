#include "smart_register_all_manual.h"
#include "../util/MessageDelegate.h"
#include "../util/md5.h"

#include "cocos2d.h"

using namespace smart;

static bool js_cocos2dx_alert(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);

	if (argc >= 1) {
		std::string* message = new std::string();

		do {
			bool ok = jsval_to_std_string(cx, argv[0], message);
			JSB_PRECONDITION2( ok, cx, false, "Error processing arguments");
		} while (0);

		MessageBox(message->c_str(), "");

		CC_SAFE_DELETE(message);
	}else{
		MessageBox("", "");
	}

	JS_SET_RVAL(cx, vp, JSVAL_VOID);
	return true;
}

static bool js_cocos2dx_md5(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);

	if (argc >= 1) {
		std::string text = std::string();

		do {
			bool ok = jsval_to_std_string(cx, argv[0], &text);
			JSB_PRECONDITION2( ok, cx, false, "Error processing arguments");
		} while (0);

		std::string std = md5(text); 
		JS_SET_RVAL(cx, vp, std_string_to_jsval(cx,  std));
	}else{
		std::string std = md5("");
		JS_SET_RVAL(cx, vp, std_string_to_jsval(cx,  std));
	}
	
	return true;
}

static bool js_cocos2dx_postMessage(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	if (argc >= 1) {
		std::string* msg = new std::string();

		do {
			bool ok = jsval_to_std_string(cx, argv[0], msg);
			JSB_PRECONDITION2( ok, cx, false, "Error processing arguments");
		} while (0);

		MessageDelegate::sharedMessageDelegate()->postMessage("message", msg->c_str());

		CC_SAFE_DELETE(msg);
	}

	JS_SET_RVAL(cx, vp, JSVAL_VOID);
	return true;
}

#if CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID
#define USER_AGENT "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.94 Safari/537.36 Android/4.2 Cocos2dx/2.2"
#endif

#if CC_TARGET_PLATFORM == CC_PLATFORM_IOS
#define USER_AGENT "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.94 Safari/537.36 iOS/6.1 Cocos2dx/2.2"
#endif

#ifndef USER_AGENT
#define  USER_AGENT "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.94 Safari/537.36 Cocos2dx/2.2"
#endif

void register_all_misc_manual(JSContext* cx, JSObject* global){
	
	JS_DefineProperty(cx, global, "global", OBJECT_TO_JSVAL(global), NULL, NULL, JSPROP_PERMANENT | JSPROP_READONLY);

	JS_DefineFunction(cx, global, "alert", js_cocos2dx_alert, 1, JSPROP_READONLY | JSPROP_PERMANENT | JSPROP_ENUMERATE);
	JS_DefineFunction(cx, global, "md5", js_cocos2dx_md5, 1, JSPROP_READONLY | JSPROP_PERMANENT | JSPROP_ENUMERATE);

	ScriptingCore::getInstance()->evalString(CCString::createWithFormat("(function(){cc.navigator = {userAgent : '%s'}})()", USER_AGENT)->getCString(), NULL);

	JS::RootedObject ns(cx);
	JS::RootedValue temp_retval(cx);
	JS_GetProperty(cx, global, "cc", &temp_retval);
	JS_ValueToObject(cx, temp_retval, &ns);

	JS_DefineFunction(cx, ns, "postMessage", js_cocos2dx_postMessage, 2, JSPROP_READONLY | JSPROP_PERMANENT);
	
    auto director = Director::getInstance();
    auto glview = director->getOpenGLView(); 
	CCSize size = glview->getFrameSize();
	ScriptingCore::getInstance()->evalString(CCString::createWithFormat("cc.getFrameSize = function(){return {width:%lf,height:%lf}};", size.width, size.height)->getCString(), NULL);
}