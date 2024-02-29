export const handleStateChange = (name, value, setFormData) => {
    setFormData( prevData => ({
        ...prevData,
        [name]:value
        }))
}