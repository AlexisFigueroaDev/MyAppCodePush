package com.myappcodepush;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "MyAppCodePush";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
        AppCenter.start(getApplication(), "18473b98-b8ed-4b41-9b1b-9c23858aa16c",
                Analytics.class, Crashes.class);
}
