import { TAnimal } from '@/types/animal';
import { TAnimalPayload } from '../types';

function mapAnimal(animal: TAnimalPayload): TAnimal {
    return {
        birthdate: animal.birth_date,
        color: animal.color,
        description: animal.description,
        gender: animal.gender,
        height: animal.height,
        id: animal.id,
        name: animal.name,
        race: animal.race_name,
        specie: animal.specie_name,
        weight: animal.weight,
    };
}

export const adaptAnimals = (response: TAnimalPayload[]): TAnimal[] => {
    return response.map(mapAnimal);
};

export const adaptAnimal = (animal: TAnimalPayload): TAnimal => mapAnimal(animal);
