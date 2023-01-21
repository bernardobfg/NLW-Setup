import { useState } from 'react';
import {Alert, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import { BackButton } from '../components/BackButton';
import { Checkbox } from '../components/Checkbox';
import { api } from '../lib/axios';
const availableWeekDays = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'];

export function New(){
	const [title, setTitle] = useState('');
	const [weekDays, setWeekDays] = useState<number[]>([]);

	async function handleSubmitNewHabit(){
		if(!title.trim() || weekDays.length === 0){
			return Alert.alert('Novo Hábito', 'Preencha o nome do hábito e escolha a recorrência');
		}
		try{
			await api.post('/habits', {weekDays, title});
			setWeekDays([]);
			setTitle('');
			Alert.alert('Novo Hábito', 'Hábito criado com sucesso!');
		}
		catch(error){
			console.log(error);
			Alert.alert('Ops', 'Não foi possível criar a hábito');

		}
	}

	function handleToggleWeekDays(weekDayIndex: number) {
		if(weekDays.includes(weekDayIndex)){
			setWeekDays(weekDays.filter(weekDay => weekDay!== weekDayIndex));

		}
		else{
			setWeekDays(prevState=> [...prevState, weekDayIndex]);
		}
	}

	return(
		<View className="flex-1 bg-background px-8 pt-16">
			<ScrollView 
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{paddingBottom: 100}}
			>
				<BackButton/>

				<Text className='mt-6 text-white font-extrabold text-3xl'>
					Criar hábito
				</Text>
				<Text className='mt-6 text-white font-semibold text-base'>
					Qual o seu comprometimento?
				</Text>
				<TextInput
					className='h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600'
					placeholder='Exercícios, dormir bem, etc...'
					placeholderTextColor={colors.zinc[400]}
					onChangeText={setTitle}
					value={title}
				/>
				<Text 
					className='font-semibold mt-4 mb-3 text-white text-base'
				>
					Qual a recorrência?
				</Text>
				{
					availableWeekDays.map((weekDay, index) => ( 
						<Checkbox 
							key={weekDay}
							title={weekDay}
							onPress={()=>handleToggleWeekDays(index)}
							checked={weekDays.includes(index)}
						/>
					))
				}
				<TouchableOpacity
					className='w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6'
					activeOpacity={0.7}
					onPress={handleSubmitNewHabit}
				>
					<Feather 
						name="check"
						size={20}
						color={colors.white} 
					/>
					<Text className='font-semibold text-base text-white ml-2'>
						Confirmar
					</Text>
				</TouchableOpacity> 
				
			</ScrollView>
		</View>
	);
}