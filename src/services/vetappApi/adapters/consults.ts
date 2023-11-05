import { TAnimalAuthorized, TDiagnosis } from '@/types/consults';
import { TAnimalAuthorizedPayload, TDiagnosisPayload } from '../types';

export const adaptDiagnosis = (response: TDiagnosisPayload[]): TDiagnosis[] => {
    return response.map((diagnosis) => ({
        id: diagnosis.id,
        diagnosis: diagnosis.diagnosis,
        treatment: diagnosis.treatment,
        createDate: diagnosis.create_date,
        updateDate: diagnosis.update_date,
        vet: diagnosis.vet_name,
    }));
};
function mapAnimal(animal: TAnimalAuthorizedPayload): TAnimalAuthorized {
    return {
      birthdate: animal.birth_date,
      color: animal.color,
      description: animal.description,
      farmer: animal.farmer_name,
      gender: animal.gender,
      height: animal.height,
      id: animal.id,
      name: animal.name,
      race: animal.race_name,
      specie: animal.specie_name,
      weight: animal.weight,
    };
  }
  
  export const adaptAnimalsAuthorized = (response: TAnimalAuthorizedPayload[]): TAnimalAuthorized[] => {
    return response.map(mapAnimal);
  };
  
  export const adaptAnimalAuthorized = (animal: TAnimalAuthorizedPayload): TAnimalAuthorized => mapAnimal(animal);