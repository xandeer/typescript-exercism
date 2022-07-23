export class DnDCharacter {
  private static readonly initialValue = 10

  readonly strength: number = DnDCharacter.generateAbilityScore()
  readonly dexterity: number = DnDCharacter.generateAbilityScore()
  readonly constitution: number = DnDCharacter.generateAbilityScore()
  readonly intelligence: number = DnDCharacter.generateAbilityScore()
  readonly wisdom: number = DnDCharacter.generateAbilityScore()
  readonly charisma: number = DnDCharacter.generateAbilityScore()

  readonly hitpoints: number = DnDCharacter.getModifierFor(this.constitution) + DnDCharacter.initialValue

  public static generateAbilityScore(): number {
    return [...Array(4)]
      .map(_ => DnDCharacter.roll())
      .sort()
      .slice(1)
      .reduce((acc, i) => acc + i, 0)
  }

  private static roll(): number {
    return Math.floor(Math.random() * 6) + 1
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - this.initialValue) / 2)
  }
}
