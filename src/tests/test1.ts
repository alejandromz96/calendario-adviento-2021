import { Color, SheepInterface } from "../models/models1";
import filterSheeps from "../tools/challenge1";

/**
 * Considera una lista/array de ovejas. 
 * Cada oveja tiene un nombre y un color. 
 * Haz una función que devuelva una lista con todas las ovejas que sean de color rojo 
 * y que además su nombre contenga tanto las letras n Y a, 
 * sin importar el orden, las mayúsculas o espacios.
 */

test('Count sheeps', (): void => {
  const sheeps: SheepInterface[] = [
    {name: 'Noa', color: Color.Red},
    {name: 'Paco', color: Color.Red},
    {name: 'Novita', color: Color.Red},
    {name: 'Norberto', color: Color.Red},
    {name: 'Noelia', color: Color.Green},
  ];
  const filteredSheeps = filterSheeps(sheeps);
  expect(filteredSheeps).toHaveLength(2);
  expect(filteredSheeps).toContain({name: 'Noa', color: Color.Red});
  expect(filteredSheeps).toContain({name: 'Novita', color: Color.Red});
});
