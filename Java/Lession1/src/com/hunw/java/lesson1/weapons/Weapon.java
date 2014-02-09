package com.hunw.java.lesson1.weapons;

import java.util.Random;

import com.hunw.java.lesson1.WeaponBehavior;

public class Weapon implements WeaponBehavior {
	
	int minAttacks;
	int maxAttacks;
	String name = "undefined";

	@Override
	public int useWeapon() {
		Random rand = new Random();
		return rand.nextInt(maxAttacks - minAttacks) + minAttacks;
	}

	@Override
	public String getName() {
		return name;
	}

}
