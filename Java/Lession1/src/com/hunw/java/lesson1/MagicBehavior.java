package com.hunw.java.lesson1;

import com.hunw.java.lesson1.characters.Character;

public interface MagicBehavior {
	
	public boolean cast(Character target, MagicBehavior spell);

	public void use(Character target);
	
}
