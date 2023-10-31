import { TDiagnosis } from '@/types/consults';
import { TDiagnosisPayload } from '../types';

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
