package com.weizoo.utils;

import java.lang.reflect.Method;
import java.util.UUID;

import org.cocos2dx.lib.Cocos2dxActivity;
import org.json.JSONException;
import org.json.JSONObject;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.NetworkInfo.State;
import android.os.Bundle;
import android.telephony.TelephonyManager;
import android.util.Log;

public class CocosMainActivity extends Cocos2dxActivity implements CocosMessageInterface{
	protected void onCreate(Bundle savedInstanceState){
		super.onCreate(savedInstanceState);
		//you must call this method on sub-class
		//CocosMessageDelegate.register(this);
	}
	
    public JSONObject open(final JSONObject params){
    	this.runOnUiThread(new Runnable(){
			@Override
			public void run() {
    			Intent intent= new Intent(CocosMainActivity.this, CocosWebActivity.class);        
    			try {
					intent.putExtra("url", params.getString("url"));
				} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
    			startActivity(intent);
			}			
		});    
    	return null;
    }
    
	@Override
	public void onMessage(String message, String data) {
		Log.d("Log", data);

		if(message.equals("message")){
			try {
				final JSONObject jsonData = new JSONObject(data);
				if(jsonData.has("jsonrpc")){
					JSONObject result = new JSONObject();
					result.put("id", jsonData.getInt("id"));
					result.put("jsonrpc", "2.0");
					try {
						@SuppressWarnings("rawtypes")
						Class[] cargs = new Class[1];
						cargs[0] = JSONObject.class;
						Method method = this.getClass().getMethod(jsonData.getString("method"), cargs);

						JSONObject ret = (JSONObject) method.invoke(this, jsonData.getJSONObject("params"));
						if(null != result){
							result.put("result", ret);
						}
						this.postMessage("message", result.toString());
					} catch (Exception e) {
						try{
							@SuppressWarnings("rawtypes")
							Class[] cargs = new Class[1];
							cargs[0] = JSONObject.class;
							Method method = this.getClass().getMethod(jsonData.getString("method") + "Async", cargs);
							method.invoke(this, jsonData);
						} catch (Exception ex){
							result.put("error", "Method Not Found.");
							e.printStackTrace();
							this.postMessage("message", result.toString());
						}
					}
				}
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
		}	
	}

	@Override
	public void postMessage(String message, String data) {
		CocosMessageDelegate.postMessage(message, data);
	}

	@SuppressLint("DefaultLocale")
	public JSONObject getConnectionInfo(JSONObject params){
		
        ConnectivityManager conMan = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        
        //mobile 3G Data Network
        State mobile = conMan.getNetworkInfo(ConnectivityManager.TYPE_MOBILE).getState();
        //wifi
        State wifi = conMan.getNetworkInfo(ConnectivityManager.TYPE_WIFI).getState();
        
        NetworkInfo info = conMan.getActiveNetworkInfo();
		
		JSONObject ret = new JSONObject();
		
		try {
			ret.put("mobile", mobile==State.CONNECTED||mobile==State.CONNECTING);
			ret.put("wifi", wifi==State.CONNECTED||wifi==State.CONNECTING);
			
			String typeName = info.getTypeName().toLowerCase(); // WIFI/MOBILE
            if (typeName.equalsIgnoreCase("wifi")) {
            	ret.put("type", typeName);
            } else {
            	// 3gnet/3gwap/uninet/uniwap/cmnet/cmwap/ctnet/ctwap
                typeName = info.getExtraInfo().toLowerCase();
                ret.put("type", typeName);
            }
            
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return ret;
	}
	
	public JSONObject getDeviceInfo(JSONObject params){
		final TelephonyManager tm = (TelephonyManager) getBaseContext().getSystemService(Context.TELEPHONY_SERVICE);
		 
	    final String tmDevice, tmSerial, androidId;
	    tmDevice = "" + tm.getDeviceId();
	    tmSerial = "" + tm.getSimSerialNumber();
	    androidId = "" + android.provider.Settings.Secure.getString(getContentResolver(), android.provider.Settings.Secure.ANDROID_ID);
	 
	    UUID deviceUuid = new UUID(androidId.hashCode(), ((long)tmDevice.hashCode() << 32) | tmSerial.hashCode());
	    String uniqueId = deviceUuid.toString();	
	    
	    JSONObject ret = new JSONObject();
	    try {
			ret.put("deviceId", uniqueId);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    
	    return ret;
	}
	
	public JSONObject getBatteryInfo(JSONObject params){
		Intent batteryInfoIntent = getApplicationContext()  
				.registerReceiver( null, new IntentFilter( Intent.ACTION_BATTERY_CHANGED ) ) ;
		
		int status = batteryInfoIntent.getIntExtra( "status" , 0 );  //BatteryManager.BATTERY_STATUS_CHARGING 
		int health = batteryInfoIntent.getIntExtra( "health" , 1 );  
		boolean present = batteryInfoIntent.getBooleanExtra( "present" , false );  
		int level = batteryInfoIntent.getIntExtra( "level" , 0 );  //battery level
		int scale = batteryInfoIntent.getIntExtra( "scale" , 0 );   //battery percent = level / scale
		int plugged = batteryInfoIntent.getIntExtra( "plugged" , 0 );  //battery status 
		int voltage = batteryInfoIntent.getIntExtra( "voltage" , 0 );  
		int temperature = batteryInfoIntent.getIntExtra( "temperature" , 0 ); // temperature - 0.1C  
		String technology = batteryInfoIntent.getStringExtra( "technology" );  	
		
		JSONObject result = new JSONObject();
		
		try {	
			result.put("status", status);
			result.put("health", health);
			result.put("present", present);
			result.put("level", level);
			result.put("scale", scale);
			result.put("plugged", plugged);
			result.put("voltage", voltage);
			result.put("temperature", temperature);
			result.put("technology", technology);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return result;
	}
}