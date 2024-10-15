import React, { useState, useEffect } from 'react';
import { databases } from '../lib/appwrite';
import { Query } from 'appwrite';
import { Sword, Shield, Heart, Zap, Pencil, Trash } from 'lucide-react';

interface CharacterType {
  $id: string;
  name: string;
  class: string;
  level: number;
  health: number;
  attack: number;
  defense: number;
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await databases.listDocuments(
        'YOUR_DATABASE_ID',
        'YOUR_CHARACTERS_COLLECTION_ID',
        [Query.orderDesc('level')]
      );
      setCharacters(response.documents as CharacterType[]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching characters:', error);
      setLoading(false);
    }
  };

  const handleEdit = (characterId: string) => {
    // Implement edit functionality
    console.log('Edit character:', characterId);
  };

  const handleDelete = async (characterId: string) => {
    if (window.confirm('Are you sure you want to delete this character?')) {
      try {
        await databases.deleteDocument('YOUR_DATABASE_ID', 'YOUR_CHARACTERS_COLLECTION_ID', characterId);
        setCharacters(characters.filter(character => character.$id !== characterId));
      } catch (error) {
        console.error('Error deleting character:', error);
      }
    }
  };

  if (loading) {
    return <div>Loading characters...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Characters Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <div key={character.$id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
              <p className="text-gray-600 mb-4">Class: {character.class}</p>
              <div className="grid grid-cols-2 gap-4">
                <Stat icon={<Zap className="h-5 w-5 text-yellow-500" />} label="Level" value={character.level} />
                <Stat icon={<Heart className="h-5 w-5 text-red-500" />} label="Health" value={character.health} />
                <Stat icon={<Sword className="h-5 w-5 text-blue-500" />} label="Attack" value={character.attack} />
                <Stat icon={<Shield className="h-5 w-5 text-green-500" />} label="Defense" value={character.defense} />
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 flex justify-end">
              <button onClick={() => handleEdit(character.$id)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                <Pencil className="h-5 w-5" />
              </button>
              <button onClick={() => handleDelete(character.$id)} className="text-red-600 hover:text-red-900">
                <Trash className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Stat: React.FC<{ icon: React.ReactNode; label: string; value: number }> = ({ icon, label, value }) => (
  <div className="flex items-center">
    {icon}
    <div className="ml-2">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  </div>
);

export default Characters;