LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_CPPFLAGS+= -fexceptions

LOCAL_MODULE := smartx_static

LOCAL_MODULE_FILENAME := libsmartx

LOCAL_SRC_FILES :=  \
	./src/scripting/smart_misc_manual.cpp \
	./src/util/NativeAdapter.cpp \
	./src/util/MessageDelegate.cpp \
	./src/util/md5.cpp

LOCAL_WHOLE_STATIC_LIBRARIES := cocos_jsb_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_chipmunk_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_extension_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_localstorage_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_ui_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_studio_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_network_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_builder_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_spine_static

LOCAL_C_INCLUDES := $(LOCAL_PATH)/src 

LOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH)/src \
	$(LOCAL_PATH)/src/scripting \
	$(LOCAL_PATH)/src/util \
	$(LOCAL_PATH)/src/pattern

LOCAL_EXPORT_CFLAGS += -DCOCOS2D_JAVASCRIPT

include $(BUILD_STATIC_LIBRARY)

$(call import-module,bindings)
$(call import-module,bindings/manual/chipmunk)
$(call import-module,bindings/manual/extension)
$(call import-module,bindings/manual/localstorage)
$(call import-module,bindings/manual/network)
$(call import-module,bindings/manual/cocosbuilder)
$(call import-module,bindings/manual/ui)
$(call import-module,bindings/manual/cocostudio)
$(call import-module,bindings/manual/spine)
