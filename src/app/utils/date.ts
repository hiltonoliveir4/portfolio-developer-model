export const calculateDateDifference = (startDate: string, endDate?: string): string => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
  
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
  
    // se o mes de termino for antes do mês de inicio
    if (months < 0) {
      years--;
      months += 12;
    }
  
    // se a diferença de meses for negativa
    if (months < 0) {
      months = 0;
    }
  
    // Montar a resposta no formato "X anos e Y meses"
    let result = '';
    if (years > 0) {
      result += `${years} ano${years > 1 ? 's' : ''}`;
    }
  
    if (months > 0) {
      if (result) result += ' e ';
      result += `${months} ${months > 1 ? 'meses' : 'mês'}`;
    }
  
    return result;
  };