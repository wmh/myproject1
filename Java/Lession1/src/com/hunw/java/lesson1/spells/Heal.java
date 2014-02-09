package com.hunw.java.lesson1.spells;

import java.util.Random;

import com.hunw.java.lesson1.characters.Character;

public class Heal extends Spell {

	int minHeal = 1;
	int maxHeal = 5;

	public Heal() {
		// TODO Auto-generated constructor stub
	}
	
	public void use(Character target) {
		Random rand = new Random();
		int toHeal = rand.nextInt(maxHeal - minHeal) + minHeal;
		target.increaseHits(toHeal);
	}	

}
