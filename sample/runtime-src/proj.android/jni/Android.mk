LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := cocos2djs_shared

LOCAL_MODULE_FILENAME := libcocos2djs

LOCAL_SRC_FILES := javascript/main.cpp \
                   javascript/Runtime_android.cpp \
                   ../../Classes/VisibleRect.cpp \
                   ../../Classes/AppDelegate.cpp \
                   ../../Classes/ConfigParser.cpp \
                   ../../Classes/Runtime.cpp

LOCAL_C_INCLUDES := $(LOCAL_PATH)/../../Classes

LOCAL_WHOLE_STATIC_LIBRARIES := smartx_static

LOCAL_EXPORT_CFLAGS := -DCOCOS2D_DEBUG=2 -DCOCOS2D_JAVASCRIPT

include $(BUILD_SHARED_LIBRARY)

$(call import-add-path, ../..)

$(call import-module, smart-x)
