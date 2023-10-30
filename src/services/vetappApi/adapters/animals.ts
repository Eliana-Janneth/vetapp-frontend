import { TAnimals } from '@/types/animal';
import { TAnimalsPayload } from '../types';

export const adaptAnimal = (response: TAnimalsPayload): TAnimals => {
    return response.map((animal) => ({
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
    }));
};
