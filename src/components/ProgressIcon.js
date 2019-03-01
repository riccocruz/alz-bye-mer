import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProgressIcon = ({ item, percentage, image, onPress, navigate }) => {

    return (
        <TouchableOpacity onPress={()=>navigate(onPress)}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source = {image}
                        style = {styles.iconStyle}
                    />
                    <Text style = {{ fontSize: 13 }}> { item } </Text>
                </View>
                <Text style = {{
                    marginTop: 10, fontSize: 20, fontWeight: '500', textAlign: 'center', marginRight: 15,
                }}> {percentage} % </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'space-between',
    },

    iconStyle: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        marginLeft: 10,
    },

});

export default ProgressIcon;
