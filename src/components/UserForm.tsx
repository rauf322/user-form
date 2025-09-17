import { useEffect, useState } from 'react'
import { FormData } from '../types/UserForm'
import ListForms from './ListForms'
import TextInput from './input/TextInput'
import SelectInput from './input/SelectInput'
import DescriptionInput from './input/DescriptionInput'
import SubmitBtn from './button/SubmitBtn'

const UserForm = () => {
  const [formData, setFormData] = useState<FormData>(
    localStorage.getItem('formData')
      ? JSON.parse(localStorage.getItem('formData') || '')
      : {
          id: '',
          title: '',
          priority: 'Medium',
          category: 'Work',
          description: '',
        }
  )

  const [userForms, setUserForms] = useState<FormData[]>(
    localStorage.getItem('UserForms')
      ? JSON.parse(localStorage.getItem('UserForms') || '')
      : []
  )

  const [isVisible, setIsVisible] = useState<boolean>(
    localStorage.getItem('isVisible')
      ? Boolean(JSON.parse(localStorage.getItem('isVisible') || ''))
      : false
  )

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
    localStorage.setItem('UserForms', JSON.stringify(userForms))
    localStorage.setItem('isVisible', JSON.stringify(isVisible))
  }, [formData, userForms, isVisible])

  function handleForm() {
    setIsVisible(!isVisible)
  }

  function handleInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.currentTarget
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (!formData.title || !formData.description) {
      alert('Please fill in all required fields.')
      return
    }

    const newFormData = {
      ...formData,
      id: Date.now().toString(),
    }
    setUserForms([...userForms, newFormData])
    setFormData({
      id: '',
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    })
  }

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-50">User Form</h1>
          <p className="mt-2 text-gray-50">Fill out the form below</p>
        </div>
        <SubmitBtn
          type={'submit'}
          onClick={handleForm}
          content={isVisible ? '❌ Close form' : '📝 Open form'}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out mb-4"
        />
        {isVisible && (
          <div>
            <form className="bg-white shadow-lg rounded-lg p-6 space-y-6">
              <TextInput
                title={'Title'}
                name={'title'}
                value={formData.title}
                onChange={handleInputChange}
              />
              <SelectInput
                title={'Priority'}
                name={'priority'}
                value={formData.priority}
                options={['High', 'Medium', 'Low']}
                onChange={handleInputChange}
              />
              <SelectInput
                title={'Category'}
                name={'category'}
                value={formData.category}
                options={['Work', 'Ideas', 'Personal']}
                onChange={handleInputChange}
              />
              <DescriptionInput
                title={'Description'}
                name={'description'}
                onChange={handleInputChange}
                value={formData.description}
              />
              <SubmitBtn
                type="submit"
                onClick={handleSubmit}
                content="Submit"
              />
            </form>
            <ListForms userForms={userForms} setUserForms={setUserForms} />
          </div>
        )}
      </div>
    </div>
  )
}

export default UserForm
