package com.chang.app;

import org.apache.cordova.DroidGap;

import android.os.Bundle;

public class Main extends DroidGap {
	
	
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		super.setIntegerProperty("splashscreen",R.drawable.logo);
		super.loadUrl("file:///android_asset/www/index.html",800);
	}

}
