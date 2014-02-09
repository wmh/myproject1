package com.hunw.java.lesson1;

import java.util.Random;

import com.hunw.java.lesson1.characters.Character;
import com.hunw.java.lesson1.weapons.Axe;
import com.hunw.java.lesson1.weapons.Bow;
import com.hunw.java.lesson1.weapons.Dagger;
import com.hunw.java.lesson1.weapons.Longsword;
import com.hunw.java.lesson1.weapons.Weapon;


public class Run {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Character player1 = new Character();
		Character player2 = new Character();
		player1.setWeapon(getWeapon());
		player2.setWeapon(getWeapon());
		echo("Player1 hits: " + player1.getHits() + ", weapon: " + player1.getWeaponName());
		echo("Player2 hits: " + player2.getHits() + ", weapon: " + player2.getWeaponName());
		
		int cnt = 0;
		while(true) {
			cnt++;
			player1.fight(player2);
			if (!player2.isAlive()) {
				echo("Player1 win!");
				break;
			}
			player2.heal(player2);

			player2.fight(player1);
			if (!player1.isAlive()) {
				echo("Player2 win!");
				break;
			}
			player1.heal(player1);

			echo("End " + cnt + " round: " + player1.getHits() + " vs " + player2.getHits());

			if (cnt > 100) {
				echo("This fight takes too long..");
			}
		}
	}

	private static WeaponBehavior getWeapon() {
		Random rand = new Random();
		Weapon weapon;
		switch (rand.nextInt(4) + 1) {
		case 1:
			weapon = new Axe();
			break;
		case 2:
			weapon = new Bow();
			break;
		case 3:
			weapon = new Dagger();
			break;
		default:
			weapon = new Longsword();
			break;
		}
		return weapon;
	}
	
	private static void echo(String str) {
		System.out.println(str);
	}

}
