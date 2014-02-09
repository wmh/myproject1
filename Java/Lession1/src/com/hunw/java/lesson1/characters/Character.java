package com.hunw.java.lesson1.characters;

import java.util.Random;

import com.hunw.java.lesson1.MagicBehavior;
import com.hunw.java.lesson1.WeaponBehavior;
import com.hunw.java.lesson1.spells.Spell;

public class Character {

	WeaponBehavior weapon;
	MagicBehavior magic = new Spell();
	
	private int	hits = 0;
	
	public Character() {
		Random rand = new Random();
		hits = rand.nextInt(41) + 60;	// 60 ~ 100
	}
	
	public int getHits() {
		return hits;
	}
	
	public void setWeapon(WeaponBehavior newWeapon) {
		weapon = newWeapon;
	}
	
	public String getWeaponName() {
		return weapon.getName();
	}
	
	public void fight(Character target) {
		if (!target.isAlive()) {
			System.out.println("You cannot use weapon on a ghost.");
			return;
		}
		int attacks = weapon.useWeapon();
		target.decreaseHits(attacks);
	}
	
	public void heal(Character target) {
		Spell heal = new Spell();
		magic.cast(target, heal);
	}

	public void decreaseHits(int points) {
		hits -= points;
		if (hits < 0) {
			hits = 0;
		}
	}

	public void increaseHits(int points) {
		hits += points;
	}

	public boolean isAlive() {
		return hits > 0;
	}
	
}
