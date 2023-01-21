import {useState, useCallback} from 'react';
import {ScrollView, Text, View, Alert} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import dayjs from 'dayjs';
import { DAY_SIZE, HabitDay } from '../components/HabitDay';
import { Header } from '../components/Header';
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning';
import { api } from '../lib/axios';
import { Loading } from '../components/Loading';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateDatesFromYearBeginning();
const minimumSummaryDatesSize = 18 * 5 + 1;
const amountOfDaysToFill = minimumSummaryDatesSize -datesFromYearStart.length;

type Summary = Array<{
	id: string;
	date: string;
	amount: number;
	completed: number;
}>

export function Home(){
	const [loading, setLoading] = useState(true);
	const [summary, setSummary] = useState<Summary>([]);
	async function fetchData(){
		try{
			setLoading(true);
			const response = await api.get('/summary');
			setSummary(response.data);
		}
		catch(err){
			Alert.alert('Ops', 'Não foi possível carregar o sumário');
			console.log(err);
		}
		finally{
			setLoading(false);
		}
	}
	useFocusEffect(useCallback(()=>{
		fetchData();
	},[]));

	const {navigate} = useNavigation();
	if(loading){
		return <Loading/>;
	}

	return(
		<View className="flex-1 bg-background px-8 pt-16">
			<Header/>
			<View className='flex-row mt-6 mb-2'>
				{weekDays.map((weekDay, index) => {		
					return(
						<Text
							key={`${weekDay}-${index}`}
							className="text-zinc-400 text-xl font-bold text-center mx-1"
							style={{width: DAY_SIZE}}
						>
							{weekDay}
						</Text>
					);})}
			</View>
			<ScrollView 
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{paddingBottom: 100}}		
			>
				<View className='flex-row flex-wrap'>
					{
						datesFromYearStart.map((date) => {
							const dayWithHabit = summary.find((day)=> dayjs(date).isSame(day.date, 'day'));
							return(
								<HabitDay 
									key={date.toISOString()}
									date={date}
									amount={dayWithHabit?.amount}
									completed={dayWithHabit?.completed}
									onPress={() => navigate('habit', {date: date.toISOString()} )}
								/>
							);})	
					}
					{
						amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, index) =>(
							<View
								key={index}
								className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40'
								style={{width: DAY_SIZE, height: DAY_SIZE}}
							/>
						))
					}
				</View>
			</ScrollView>
			
		</View>
	);
}