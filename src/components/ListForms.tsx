import { UserFormProps } from '../types/UserForm';
import DeleteBtn from './button/DeleteBtn';
import ListContent from './listItems/ListContent';
import ListDescription from './listItems/ListDescription';

const ListForms = ({ userForms, setUserForms }: UserFormProps) => {
  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    const idToDelete = e.currentTarget.id;
    setUserForms(userForms.filter((form) => form.id !== idToDelete));
  }

  return (
    <div className='mt-6'>
      {userForms.length > 0 ? (
        <div className='bg-white shadow-lg rounded-lg p-6 space-y-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
            Submitted Forms ({userForms.length})
          </h2>
          <div className='space-y-4'>
            {userForms.map((form) => (
              <div
                key={form.id}
                className='border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200'
              >
                <div className='flex justify-between items-start mb-4'>
                  <h3 className='text-xl font-bold text-gray-900'>
                    {form.title}
                  </h3>
                  <DeleteBtn
                    content={'Delete'}
                    onClick={handleDelete}
                    id={form.id}
                  />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                  <ListContent
                    title={'Priority'}
                    value={form.priority}
                    options={['High', 'Medium', 'Low']}
                  />
                  <ListContent
                    title={'Category'}
                    value={form.category}
                    options={['Work', 'Ideas', 'Personal']}
                  />
                </div>

                {form.description && (
                  <ListDescription
                    title={'Description'}
                    content={form.description}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <div className='text-center py-12'>
            <div className='text-gray-400 text-6xl mb-4'>📝</div>
            <h3 className='text-xl font-medium text-gray-900 mb-2'>
              No forms submitted yet
            </h3>
            <p className='text-gray-600'>
              Submit your first form above to see it here!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListForms;
