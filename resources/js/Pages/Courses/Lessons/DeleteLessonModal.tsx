import React from 'react';
import { useForm } from '@inertiajs/react';

interface Props {
    lessonId: number;
    onClose: () => void;
}

const DeleteLessonModal: React.FC<Props> = ({ lessonId, onClose }) => {
    const { data, setData, delete: destroy, errors } = useForm({
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        destroy(`/lessons/${lessonId}`, {
            onSuccess: () => onClose(),
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Confirmer la suppression</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-lg"
                        />
                        {errors.password && <div className="text-red-600">{errors.password}</div>}
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg">Annuler</button>
                        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-lg">Supprimer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteLessonModal;
