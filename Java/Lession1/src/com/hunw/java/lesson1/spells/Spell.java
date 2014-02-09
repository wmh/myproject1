package com.hunw.java.lesson1.spells;

import com.hunw.java.lesson1.MagicBehavior;
import com.hunw.java.lesson1.characters.Character;

public class Spell implements MagicBehavior {

	public Spell() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public boolean cast(Character target, MagicBehavior spell) {
		if (!checkSkill()) {
			System.out.println("There is no chance to use this spell.");
			return false;
		}
		spell.use(target);
		return true;
	}

	public void use(Character target) {}
		
	private boolean checkSkill() {
		return true;
	}


}
