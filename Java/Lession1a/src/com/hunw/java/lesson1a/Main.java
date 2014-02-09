package com.hunw.java.lesson1a;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;

import org.json.JSONArray;
import org.json.JSONObject;

public class Main {
	
	static String apiUrl = "https://gdata.youtube.com/feeds/api/playlists/PLIx8QniXH-rHHSgw3MeHfnyb24ROWxoLS?v=2&alt=json&fields=entry(media:group(yt:videoid))&max-results=50";

	/**
	 * @param args
	 * @throws MalformedURLException 
	 */
	public static void main(String[] args) {
		
		BufferedReader reader = null;
		String result = "";
		
		try {
			URL url = new URL(apiUrl);
		    reader = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));
		    
		    for (String line; (line = reader.readLine()) != null;) {
		    	result += line;
		    }
		    
		    JSONObject json = new JSONObject(result);
		    JSONArray entries = (JSONArray)((JSONObject)json.get("feed")).get("entry");
		    int len = entries.length();
		    for (int i = 0; i < len; ++i) {
		    	JSONObject entry = (JSONObject)entries.get(i);
		    	System.out.println( ((JSONObject)((JSONObject)entry.get("media$group")).get("yt$videoid")).get("$t") );
		    }

		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
		    if (reader != null) try { reader.close(); } catch (IOException ignore) {}
		}
	}

}
