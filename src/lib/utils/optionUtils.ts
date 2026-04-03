export interface OptionWithLabel {
    label: string
    value: string
}

export const createLabelsOptions = (options: string[]): OptionWithLabel[] => {
    const labels = ['A', 'B', 'C', 'D']
    return options.map((value, index) => ({
        label: labels[index],
        value,
    }))
}

export const getLabelFromOptions = (
    selectedValue: string,
    options: OptionWithLabel[]
): string => {
    const found = options.find((opt) => opt.value === selectedValue)
    return found?.label || ''
}

export const getValueFromLabel = (
    label: string,
    options: OptionWithLabel[]
): string => {
    const found = options.find((opt) => opt.label === label)
    return found?.value || ''
}