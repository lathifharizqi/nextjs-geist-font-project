import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Personal Dashboard</Text>
        <Image
          source={require('./assets/arsip-nasional-ri-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.profileSection}>
        <Image
          source={require('./assets/profile-photo.jpg')}
          style={styles.profilePhoto}
        />
        <Text style={styles.name}>Nama Lengkap, Gelar</Text>
        <Text style={styles.nip}>NIP: 1234567890</Text>
      </View>
      <View style={styles.personalDataSection}>
        <Text style={styles.sectionTitle}>Data Personal</Text>
        <View style={styles.dataRow}><Text style={styles.label}>Unit Kerja:</Text><Text style={styles.value}>Nama Unit Kerja</Text></View>
        <View style={styles.dataRow}><Text style={styles.label}>Pangkat + TMT:</Text><Text style={styles.value}>Pangkat, TMT Date</Text></View>
        <View style={styles.dataRow}><Text style={styles.label}>Prediksi KP:</Text><Text style={styles.value}>Prediksi KP Info</Text></View>
        <View style={styles.dataRow}><Text style={styles.label}>Angka Kredit Terakhir:</Text><Text style={styles.value}>Nilai Kredit</Text></View>
        <View style={styles.dataRow}><Text style={styles.label}>Jabatan + TMT:</Text><Text style={styles.value}>Jabatan, TMT Date</Text></View>
        <View style={styles.dataRow}><Text style={styles.label}>Sisa Cuti:</Text><Text style={styles.value}>Jumlah Hari</Text></View>
        <View style={styles.dataRow}><Text style={styles.label}>TMT Pensiun:</Text><Text style={styles.value}>Tanggal Pensiun</Text></View>
        <View style={styles.dataRow}><Text style={styles.label}>TMT Gaji Berkala Terakhir:</Text><Text style={styles.value}>Tanggal Gaji Berkala</Text></View>
        <View style={styles.dataRow}><Text style={styles.label}>Pemenuhan JP Tahun Lalu:</Text><Text style={styles.value}>Info JP</Text></View>
        <View style={styles.dataRow}><Text style={styles.label}>Alamat Domisili:</Text><Text style={styles.value}>Alamat Lengkap</Text></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  logo: {
    width: 50,
    height: 50,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  nip: {
    fontSize: 16,
    color: '#555',
  },
  personalDataSection: {
    borderTopWidth: 1,
    borderTopColor: '#000',
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  dataRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    width: 180,
    color: '#000',
  },
  value: {
    flex: 1,
    color: '#333',
  },
});
